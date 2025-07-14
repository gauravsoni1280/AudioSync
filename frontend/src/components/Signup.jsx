import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Music, ArrowRight, Github, Mail } from "lucide-react"
import {Link} from "react-router-dom";
// import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/firebase-auth/firebaseConfig"
import { createUser } from "@/services/sharedServices"

export default function SignupPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  
  const handleSignup = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      // const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      await createUser(user.uid, name, email)
      window.location.href = "/login"
    } catch (error) {
      console.error("Signup failed", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-white">
      <div className="flex flex-col w-full p-8 md:p-12 justify-center items-center">
        <div className="w-full max-w-md">
          <div className="flex items-center gap-2 mb-8">
            <Music className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AudioSync
            </span>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Create an account</h1>
            <p className="text-gray-500">Join AudioSync to start creating music parties</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <p className="text-xs text-gray-500">Must be at least 8 characters</p>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <Label htmlFor="terms" className="text-sm">
                I agree to the {" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and {" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              disabled={isLoading}
            >
              {isLoading ? "Creating account..." : "Create account"}
              {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
