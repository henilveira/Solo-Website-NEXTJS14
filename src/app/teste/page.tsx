import { AuthProvider } from "@/components/ui/AuthProvider";
import { CompanyProvider } from "@/components/ui/CompanyProvider";
import App from "@/components/ui/empresa-dashboard";

export default function Page() {
    return(
        <AuthProvider>
            <CompanyProvider>
                <App />
            </CompanyProvider>
        </AuthProvider>
    );
}