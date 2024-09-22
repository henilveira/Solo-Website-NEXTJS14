import Navbar from "@/components/magicui/navbar";
import { AuthProvider } from "@/components/ui/AuthProvider";
import Profile from "@/components/ui/profile";

export default function Page() {
    return (
        <AuthProvider>
            <div className="">
                {/* <Navbar /> */}
                <Profile />
            </div>
        </AuthProvider>
    );
}