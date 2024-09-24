import { ScrollArea } from "@/components/ui/scroll-area";
import { SettingsComponent } from "@/components/ui/settings-component";

export default function Configuracoes() {
    return (
        <div>
            <ScrollArea className="">
              <SettingsComponent />
            </ScrollArea>
        </div>
    );
}