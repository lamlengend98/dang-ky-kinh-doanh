import { motion } from 'motion/react';
import { ReactNode, useState, useMemo, useRef, useEffect } from 'react';
import { ChevronDown, ChevronRight, X, Search, Info } from 'lucide-react';
import { IndustryOption } from '../data/industries';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { useVirtualizer } from '@tanstack/react-virtual';

interface FormSectionProps {
  title: string;
  children: ReactNode;
  icon?: ReactNode;
}

export function FormSection({ title, children, icon }: FormSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-border"
    >
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
        {icon && <div className="text-primary">{icon}</div>}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="space-y-5">{children}</div>
    </motion.div>
  );
}

interface FormFieldProps {
  label: string;
  required?: boolean;
  children: ReactNode;
  hint?: string;
  tooltip?: string;
}

export function FormField({ label, required, children, hint, tooltip }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-1.5">
        <label className="block text-sm font-medium">
          {label}
        </label>
        {tooltip && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="w-3.5 h-3.5 text-muted-foreground cursor-help hover:text-primary transition-colors" />
            </TooltipTrigger>
            <TooltipContent side="top" sideOffset={8}>
              <p className="max-w-[200px]">{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
      {children}
      {hint && <p className="text-sm text-muted-foreground">{hint}</p>}
    </div>
  );
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`w-full px-4 py-2.5 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all ${className || ''}`}
    />
  );
}

interface CurrencyInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
}

export function CurrencyInput({ placeholder, value, onChange, required }: CurrencyInputProps) {
  const formatCurrency = (val: string) => {
    // Remove all non-digits
    const digits = val.replace(/\D/g, '');
    if (!digits) return '';

    // Format with thousand separators
    return new Intl.NumberFormat('vi-VN').format(parseInt(digits));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, '');
    if (onChange) {
      onChange(rawValue);
    }
  };

  const displayValue = value ? formatCurrency(value) : '';

  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        value={displayValue}
        onChange={handleChange}
        className="w-full px-4 py-2.5 pr-12 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
      />
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
        VND
      </span>
    </div>
  );
}

interface SelectProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  required?: boolean;
  name?: string;
  disabled?: boolean;
}

export function Select({ value, onChange, options, placeholder, required, name, disabled }: SelectProps) {
  return (
    <select
      value={value}
      onChange={onChange}
      name={name}
      disabled={disabled}
      className="w-full px-4 py-2.5 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

interface TextareaProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  required?: boolean;
  name?: string;
}

export function Textarea({ placeholder, value, onChange, rows = 3, required, name }: TextareaProps) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      rows={rows}
      className="w-full px-4 py-2.5 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
    />
  );
}

// Multi-level industry selector

interface FlatItem {
  option: IndustryOption;
  level: number;
  hasChildren: boolean;
}

interface MultiIndustrySelectProps {
  selected: IndustryOption[];
  onChange: (selected: IndustryOption[]) => void;
  options: IndustryOption[];
  required?: boolean;
  mainIndustry?: string;
  onMainIndustryChange?: (code: string) => void;
  tooltip?: string;
}

const ROW_HEIGHT = 36;

// A checkbox that supports the indeterminate (partial) state
function IndeterminateCheckbox({
  checked,
  indeterminate,
  onChange,
  className,
}: {
  checked: boolean;
  indeterminate: boolean;
  onChange: () => void;
  className?: string;
}) {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);
  return (
    <input
      ref={ref}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className={className}
    />
  );
}

function flattenTree(
  options: IndustryOption[],
  expandedSections: Set<string>,
  level = 0
): FlatItem[] {
  const result: FlatItem[] = [];
  for (const opt of options) {
    const hasChildren = !!(opt.classes && opt.classes.length > 0);
    result.push({ option: opt, level, hasChildren });
    if (hasChildren && expandedSections.has(opt.code)) {
      result.push(...flattenTree(opt.classes!, expandedSections, level + 1));
    }
  }
  return result;
}

function normalizeText(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase();
}

interface SearchableSelectProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
}

export function SearchableSelect({ options, value, onChange, placeholder, disabled, required }: SearchableSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const filteredOptions = useMemo(() => {
    if (!query) return options;
    const normalizedQuery = normalizeText(query);
    return options.filter(opt => normalizeText(opt.label).includes(normalizedQuery));
  }, [options, query]);

  const displayLabel = useMemo(() => {
    const selected = options.find(opt => opt.value === value);
    return selected ? selected.label : '';
  }, [options, value]);

  return (
    <div className="relative" ref={containerRef}>
      <div
        className={`w-full px-4 py-2.5 bg-input-background rounded-lg border border-border flex items-center justify-between cursor-pointer transition-all ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-primary'
          } ${isOpen ? 'ring-2 ring-primary/50 border-primary' : ''}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <span className={!value ? 'text-muted-foreground truncate' : 'truncate'}>
          {displayLabel || placeholder}
        </span>
        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute z-50 w-full mt-2 bg-white border border-border rounded-lg shadow-xl overflow-hidden"
        >
          <div className="p-2 border-b border-border flex items-center gap-2">
            <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
            <input
              autoFocus
              type="text"
              placeholder="Tìm kiếm..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="flex-1 text-sm outline-none bg-transparent"
            />
          </div>
          <div className="max-h-60 overflow-y-auto">
            {filteredOptions.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-4">Không tìm thấy kết quả</p>
            ) : (
              filteredOptions.map(opt => (
                <div
                  key={opt.value}
                  className={`px-4 py-2 text-sm cursor-pointer hover:bg-accent transition-colors ${value === opt.value ? 'bg-primary/10 text-primary font-medium' : ''
                    }`}
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                    setQuery('');
                  }}
                >
                  {opt.label}
                </div>
              ))
            )}
          </div>
        </motion.div>
      )}

      {/* {!value && (
        <input
          tabIndex={-1}
          value=""
          readOnly
          className="absolute opacity-0 pointer-events-none w-px h-px"
        />
      )} */}
    </div>
  );
}

function flattenSearch(options: IndustryOption[], query: string): FlatItem[] {
  const q = normalizeText(query);
  const result: FlatItem[] = [];
  for (const group of options) {
    const groupMatch = normalizeText(group.name).includes(q);
    const matchingChildren = group.classes
      ? group.classes.filter(c => normalizeText(c.name).includes(q))
      : [];

    if (groupMatch) {
      const hasChildren = !!(group.classes && group.classes.length > 0);
      result.push({ option: group, level: 0, hasChildren });
      if (hasChildren) {
        for (const child of group.classes!) {
          result.push({ option: child, level: 1, hasChildren: false });
        }
      }
    } else if (matchingChildren.length > 0) {
      result.push({ option: group, level: 0, hasChildren: true });
      for (const child of matchingChildren) {
        result.push({ option: child, level: 1, hasChildren: false });
      }
    }
  }
  return result;
}

export function MultiIndustrySelect({ selected, onChange, options, required, mainIndustry, onMainIndustryChange, tooltip }: MultiIndustrySelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');

  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const flatItems = useMemo<FlatItem[]>(() => {
    if (searchQuery.trim()) {
      return flattenSearch(options, searchQuery.trim());
    }
    return flattenTree(options, expandedSections);
  }, [options, expandedSections, searchQuery]);

  const virtualizer = useVirtualizer({
    count: flatItems.length,
    getScrollElement: () => scrollRef.current,
    estimateSize: () => ROW_HEIGHT,
    overscan: 8,
  });

  const toggleSection = (id: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedSections(newExpanded);
  };

  const toggleOption = (id: string) => {
    if (selected.some(s => s.code === id)) {
      onChange(selected.filter(s => s.code !== id));
    } else {
      const option = findOptionById(id, options);
      if (option) {
        onChange([...selected, option]);
      }
    }
  };

  // Select / deselect all children of a section
  const toggleSectionChildren = (group: IndustryOption) => {
    const children = (group.classes ?? []);
    const allSelected = children.every(c => selected.some(s => s.code === c.code));
    if (allSelected) {
      // deselect all
      onChange(selected.filter(s => !children.some(c => c.code === s.code)));
    } else {
      // select all (add missing)
      const toAdd = children.filter(c => !selected.some(s => s.code === c.code));
      onChange([...selected, ...toAdd.filter(c => findOptionById(c.code, options))]);
    }
  };

  const removeSelected = (id: string) => {
    onChange(selected.filter(s => s.code !== id));
    if (mainIndustry === id) {
      onMainIndustryChange?.('');
    }
  };

  const findOptionById = (id: string, opts: IndustryOption[]): IndustryOption | null => {
    for (const opt of opts) {
      if (opt.code === id) return opt;
      if (opt.classes) {
        const found = findOptionById(id, opt.classes);
        if (found) return found;
      }
    }
    return null;
  };

  return (
    <div className="space-y-3">
      <div className="relative" ref={containerRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-2.5 bg-input-background rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-left flex items-center justify-between"
        >
          <span className={selected.length === 0 ? 'text-muted-foreground' : ''}>
            {selected.length === 0 ? 'Chọn ngành nghề kinh doanh' : `${selected.length} ngành nghề đã chọn`}
          </span>
          <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute z-10 w-full bottom-full mb-2 bg-white border border-border rounded-lg shadow-lg flex flex-col"
            style={{ maxHeight: '384px' }}
          >
            {/* Search */}
            <div className="p-2 border-b border-border flex items-center gap-2">
              <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <input
                type="text"
                placeholder="Tìm kiếm ngành nghề..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="flex-1 text-sm outline-none bg-transparent"
              />
              {searchQuery && (
                <button type="button" onClick={() => setSearchQuery('')} className="text-muted-foreground hover:text-foreground">
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Virtualized list */}
            <div ref={scrollRef} className="overflow-y-auto flex-1">
              {flatItems.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-8">Không tìm thấy ngành nghề</p>
              ) : (
                <div
                  style={{ height: `${virtualizer.getTotalSize()}px`, position: 'relative' }}
                >
                  {virtualizer.getVirtualItems().map(virtualRow => {
                    const { option, level, hasChildren } = flatItems[virtualRow.index];
                    const isExpanded = expandedSections.has(option.code);
                    const isSelected = selected.some(s => s.code === option.code);

                    // Compute 3-state for section (level 0 with children)
                    const childIds = hasChildren ? (option.classes ?? []).map(c => c.code) : [];
                    const selectedChildCount = childIds.filter(id => selected.some(s => s.code === id)).length;
                    const sectionChecked = childIds.length > 0 && selectedChildCount === childIds.length;
                    const sectionIndeterminate = selectedChildCount > 0 && selectedChildCount < childIds.length;

                    return (
                      <div
                        key={option.code}
                        style={{
                          position: 'absolute',
                          top: virtualRow.start,
                          left: 0,
                          right: 0,
                          height: `${ROW_HEIGHT}px`,
                        }}
                      >
                        <div
                          className={`flex items-center gap-2 h-full px-3 hover:bg-accent cursor-pointer transition-colors rounded ${level === 0 ? 'font-semibold bg-sky-50' : ''
                            }`}
                          style={{ paddingLeft: `${level * 16 + 12}px` }}
                        >
                          {hasChildren ? (
                            <button
                              type="button"
                              onClick={e => { e.stopPropagation(); toggleSection(option.code); }}
                              className="flex-shrink-0"
                            >
                              {isExpanded ? (
                                <ChevronDown className="w-4 h-4 text-muted-foreground" />
                              ) : (
                                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                              )}
                            </button>
                          ) : (
                            <div className="w-4 flex-shrink-0" />
                          )}

                          <label className="flex items-center gap-2 flex-1 cursor-pointer min-w-0">
                            {hasChildren ? (
                              <IndeterminateCheckbox
                                checked={sectionChecked}
                                indeterminate={sectionIndeterminate}
                                onChange={() => toggleSectionChildren(option)}
                                className="w-4 h-4 flex-shrink-0 rounded border-border text-primary focus:ring-2 focus:ring-primary/50"
                              />
                            ) : (
                              <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={() => toggleOption(option.code)}
                                className="w-4 h-4 flex-shrink-0 rounded border-border text-primary focus:ring-2 focus:ring-primary/50"
                              />
                            )}
                            <span className={`truncate text-sm ${level === 0 ? 'text-primary' : ''}`}>
                              {level > 0 && (
                                <span className="font-mono opacity-60 mr-1">{option.code} -</span>
                              )}{' '}{option.name}
                            </span>
                          </label>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>

      {/* Selected industries list */}
      {selected.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium">Ngành nghề đã chọn:</p>
          <div className="flex flex-wrap gap-2">
            {selected.map(industry => {
              const option = findOptionById(industry.code, options);
              const isMain = mainIndustry === industry.code;
              return option ? (
                <motion.div
                  key={industry.code}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm transition-all border ${isMain
                    ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                    : 'bg-primary/10 text-primary border-transparent'
                    }`}
                >
                  <button
                    type="button"
                    onClick={() => onMainIndustryChange?.(industry.code)}
                    className="flex items-center gap-2 hover:opacity-80 text-left"
                    title={isMain ? "Đang là ngành chính" : "Chọn làm ngành chính"}
                  >
                    {isMain && (
                      <span className="bg-white text-primary text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
                        Ngành chính
                      </span>
                    )}
                    <span className="truncate max-w-[200px]">{option.code} - {option.name}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => removeSelected(industry.code)}
                    className={`rounded-full p-0.5 transition-colors ${isMain ? 'hover:bg-white/20' : 'hover:bg-primary/20'
                      }`}
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </motion.div>
              ) : null;
            })}
          </div>
        </div>
      )}

      {/* {selected.length === 0 && (
        <input
          type="text"
          value=""
          onChange={() => { }}
          className="absolute w-0 h-0 opacity-0 pointer-events-none"
        />
      )} */}
    </div>
  );
}

interface AddressSelectorProps {
  prefix: string;
  formData: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  label: string;
  required?: boolean;
  tooltip?: string;
}

export function AddressSelector({ prefix, formData, onChange, label, required, tooltip }: AddressSelectorProps) {
  const [provinces, setProvinces] = useState<{ code: string; name: string }[]>([]);
  const [communes, setCommunes] = useState<{ code: string; name: string }[]>([]);
  const [loadingProvinces, setLoadingProvinces] = useState(false);
  const [loadingCommunes, setLoadingCommunes] = useState(false);

  // Field names based on prefix
  const chiTietKey = `${prefix}_chiTiet`;
  const xaPhuongKey = `${prefix}_xaPhuong`;
  const tinhThanhKey = `${prefix}_tinhThanh`;

  const selectedProvinceName = formData[tinhThanhKey];

  // Fetch provinces on mount
  useEffect(() => {
    setLoadingProvinces(true);
    fetch('/address-kit-api/latest/provinces')
      .then(res => res.json())
      .then(data => {
        setProvinces(data.provinces || []);
      })
      .catch(err => console.error('Error fetching provinces:', err))
      .finally(() => setLoadingProvinces(false));
  }, []);

  // Fetch communes when province changes
  useEffect(() => {
    if (!selectedProvinceName) {
      setCommunes([]);
      return;
    }

    const province = provinces.find(p => p.name === selectedProvinceName);
    if (province) {
      setLoadingCommunes(true);
      fetch(`/address-kit-api/latest/provinces/${province.code}/communes`)
        .then(res => res.json())
        .then(data => {
          setCommunes(data.communes || []);
        })
        .catch(err => console.error('Error fetching communes:', err))
        .finally(() => setLoadingCommunes(false));
    } else {
      setCommunes([]);
    }
  }, [selectedProvinceName, provinces]);


  return (
    <FormField label={label} required={required} tooltip={tooltip}>
      <div className="grid gap-3">
        <div className="grid md:grid-cols-2 gap-3">
          <SearchableSelect
            placeholder={loadingProvinces ? "Đang tải tỉnh/thành..." : "Chọn Tỉnh/Thành phố"}
            value={formData[tinhThanhKey]}
            onChange={(val) => {
              // Clear ward when province changes
              onChange({ target: { name: xaPhuongKey, value: '' } } as any);
              onChange({ target: { name: tinhThanhKey, value: val } } as any);
            }}
            options={provinces.map(p => ({ value: p.name, label: p.name }))}
            required={required}
            disabled={loadingProvinces}
          />
          <SearchableSelect
            placeholder={
              !selectedProvinceName
                ? "Vui lòng chọn tỉnh trước"
                : loadingCommunes
                  ? "Đang tải xã/phường..."
                  : "Chọn Xã/Phường/Đặc khu"
            }
            value={formData[xaPhuongKey]}
            onChange={(val) => onChange({ target: { name: xaPhuongKey, value: val } } as any)}
            options={communes.map(c => ({ value: c.name, label: c.name }))}
            required={required}
            disabled={!selectedProvinceName || loadingCommunes}
          />
        </div>
        <Input
          name={chiTietKey}
          placeholder="Số nhà/phòng, ngách/hẻm, ngõ/kiệt, đường/phố/đại lộ, tổ/xóm/ấp/thôn"
          value={formData[chiTietKey]}
          onChange={onChange}
          required={required}
        />
      </div>
    </FormField>
  );
}
