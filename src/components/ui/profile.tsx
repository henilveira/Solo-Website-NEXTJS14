
'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function Profile() {
  return (
    <Popover>
      <PopoverTrigger asChild>
      <Avatar className="cursor-pointer">
        <AvatarImage src="https://avatars.githubusercontent.com/u/139990659?v=4" />
        <AvatarFallback>HA</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="p-4 w-50 mr-6 mt-1 bg-neutral-900 text-white shadow-xl">
        <div className="grid gap-4 p-2">

          <div className="space-y-2 flex">
          <Avatar className="cursor-pointer">
                <AvatarImage src="https://avatars.githubusercontent.com/u/139990659?v=4" />
                <AvatarFallback>HA</AvatarFallback>
            </Avatar>
            <div className="items-start ml-2 mt-0 flex flex-col text-left">
                <h4 className="font-medium leading-none">Henrique Ataide</h4>
                <p className="text-sm text-muted-foreground">
                henrique@solosolutions.com.br
                </p>
            </div>
          </div>
          <Button className="w-full" variant="solo"> 
            Sair
          </Button>
        </div>
          
      </PopoverContent>
    </Popover>
  )
}
