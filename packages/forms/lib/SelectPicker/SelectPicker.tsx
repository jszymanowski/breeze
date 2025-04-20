import { useCallback, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/utils";
import { Button } from "@root/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@root/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@root/components/ui/popover";

export interface Option {
  icon?: string;
  value: string;
  label: string;
}

interface SelectPickerProps {
  options: Option[];
  value?: string;
  onSelect: (selected: string) => void;
  placeholder?: string;
  className?: string;
  renderSelected?: (selected: Option) => React.ReactNode;
}

interface TriggerProps {
  selected?: Option;
  placeholder: string;
  className: string;
  open: boolean;
  renderSelected?: (selected: Option) => React.ReactNode;
}

const Trigger = ({
  placeholder,
  selected,
  className,
  open,
  renderSelected = (selected) => selected.label,
}: TriggerProps) => {
  return (
    <PopoverTrigger asChild>
      <Button
        variant="outline"
        role="combobox"
        aria-expanded={open}
        className={`w-[200px] justify-between ${className}`}
      >
        {renderSelected(selected || { label: placeholder, value: "" })}
        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
  );
};

export default function SelectPicker({
  options,
  value = "",
  placeholder = "Select a value...",
  className = "",
  onSelect = () => {},
  renderSelected = (selected) => selected.label,
}: SelectPickerProps) {
  const [open, setOpen] = useState(false);

  const selectedOption = useCallback(() => {
    return options.find((option) => option.value === value);
  }, [options, value]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <Trigger
        selected={selectedOption()}
        placeholder={placeholder}
        open={open}
        className={`w-full ${className}`}
        renderSelected={renderSelected}
      />
      <PopoverContent className="w-full p-0">
        <Command value={value}>
          <CommandInput placeholder="Search" className="h-9" />
          <CommandList>
            <CommandEmpty>No results found</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  value={option.value}
                  key={option.value}
                  onSelect={() => {
                    setOpen(false);
                    onSelect(option.value);
                  }}
                >
                  {option.icon ? <span className="mr-2">{option.icon}</span> : ""}
                  {option.label}
                  <Check className={cn("ml-auto", option.value === value ? "opacity-100" : "opacity-0")} />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
