"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react"

export function EmailSignup() {
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [comments, setComments] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  // Google Form configuration
  const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/d/e/1FAIpQLSdAZLMhtxPS5rAnvBW0_6KQIglcwleRSE-Ld7O84bh3YQijLg/formResponse"
  const ENTRY_EMAIL = "entry.129045322"
  const ENTRY_COMPANY = "entry.1227275871"
  const ENTRY_COMMENTS = "entry.1832846703"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")

    try {
      const formData = new FormData()
      formData.append(ENTRY_EMAIL, email)
      formData.append(ENTRY_COMPANY, company)
      formData.append(ENTRY_COMMENTS, comments)

      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors", // Google Forms no permite CORS
        body: formData,
      })

      setStatus("success")
    } catch (err) {
      console.error(err)
      setStatus("idle")
    }
  }

  return (
    <section id="contact-form" className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-balance">
            Listo para dejar de perseguir pagos atrasados?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
          Estamos buscando empresas para probar CobroInteligente en su proceso de cobranza.
          Deja tus datos y te contactaremos.
          </p>

          {status === "success" ? (
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20">
              <CheckCircle2 className="size-5 text-success" />
              <span>¡Estás en la lista! Revisa tu correo para los próximos pasos.</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Correo laboral"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:border-primary-foreground/40 focus-visible:ring-primary-foreground/20"
              />
              <Input
                type="text"
                placeholder="Nombre de la empresa"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:border-primary-foreground/40 focus-visible:ring-primary-foreground/20"
              />
              <Textarea
                placeholder="Comentarios (opcional)"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:border-primary-foreground/40 focus-visible:ring-primary-foreground/20"
              />
              <Button
                type="submit"
                disabled={status === "loading"}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 group"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Quiero evaluar mis clientes
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>
          )}

          <p className="mt-4 text-sm text-primary-foreground/60 font-medium">
          🚀 Recibiendo solicitudes por tiempo limitado 
          </p>
          <p className="mt-4 text-sm text-primary-foreground/60">
          Déjanos tus datos y evaluamos tu caso sin costo.
          No se requiere tarjeta de crédito.
          </p>
        </div>
      </div>
    </section>
  )
}