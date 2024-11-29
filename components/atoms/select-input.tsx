import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/atoms/select";

type SelectOption = {
    value: string;
    label: string;
};

type SelectInputProps = {
    options: SelectOption[];
    placeholder?: string;
    value?: string;
    onChange: (value: string) => void;
    className?: string;
};

const SelectInput: React.FC<SelectInputProps> = ({
    options = [],
    placeholder = "Select an option",
    value,
    onChange,
    className = "",
}) => {
    return (
        <Select value={value} onValueChange={onChange}>
            <SelectTrigger className={`bg-[#FFFFFF0F] border-[#FFFFFF38] ${className}`}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default SelectInput;
