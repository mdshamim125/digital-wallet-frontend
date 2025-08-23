/* eslint-disable @typescript-eslint/no-explicit-any */
import { useId, useState, useEffect } from "react";
import { CheckIcon, ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useGetAllUsersQuery } from "@/redux/features/user/user.api";

/**
 * Compatible with react-hook-form via {...field}
 */
export default function SearchSelect({ value, onChange }: any) {
  const { data: usersInfo } = useGetAllUsersQuery(null);
  console.log(usersInfo?.data);

  const userOptions =
    usersInfo?.data?.map((user: any) => ({
      value: user._id,
      label: user.email + "(" + user.role + ")",
    })) || [];

  console.log(userOptions);

  const id = useId();
  const [open, setOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(value || "");

  // Keep internal state in sync with react-hook-form value
  useEffect(() => {
    setInternalValue(value || "");
  }, [value]);

  const handleSelect = (currentValue: string) => {
    const newValue = currentValue === internalValue ? "" : currentValue;
    setInternalValue(newValue);
    onChange?.(newValue); // notify react-hook-form
    setOpen(false);
  };

  return (
    <div className="*:not-first:mt-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            id={id}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="bg-background hover:bg-background border-input w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-[3px]"
          >
            <span
              className={cn(
                "truncate",
                !internalValue && "text-muted-foreground"
              )}
            >
              {internalValue
                ? userOptions.find((fw: any) => fw.value === internalValue)
                    ?.label
                : "Select an  account..."}
            </span>
            <ChevronDownIcon
              size={16}
              className="text-muted-foreground/80 shrink-0"
              aria-hidden="true"
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="border-input w-full min-w-[var(--radix-popper-anchor-width)] p-0"
          align="start"
        >
          <Command>
            <CommandInput placeholder="Search framework..." />
            <CommandList>
              <CommandEmpty>No User Found!</CommandEmpty>
              <CommandGroup>
                {userOptions.map((fw: any) => (
                  <CommandItem
                    key={fw.value}
                    value={fw.value}
                    onSelect={() => handleSelect(fw.value)}
                  >
                    {fw.label}
                    {internalValue === fw.value && (
                      <CheckIcon size={16} className="ml-auto" />
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
