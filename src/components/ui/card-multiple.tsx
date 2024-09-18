import React from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

type Option = "option1" | "option2" | "option3" | "option4" | "option5"

interface MultiSelectProps {
  selectedOptions: Option[];
  onOptionSelect: (value: string) => void;
}

export function MultiSelect({ selectedOptions, onOptionSelect }: MultiSelectProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Select Multiple Options</CardTitle>
        <CardDescription>Choose the options that best fit your needs.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Select onValueChange={onOptionSelect}>
          <SelectTrigger>
            <SelectValue placeholder="Select options" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
              <SelectItem value="option4">Option 4</SelectItem>
              <SelectItem value="option5">Option 5</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {selectedOptions.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {selectedOptions.map((option) => (
              <Badge key={option} variant="outline">
                {option}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}