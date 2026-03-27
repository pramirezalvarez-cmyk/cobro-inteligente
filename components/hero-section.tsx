"use client" 
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"


export function HeroSection() {
  const scrollToForm = () => {
    const el = document.getElementById("contact-form")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <section className="relative py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-sm border border-border">
              <span className="inline-block size-2 rounded-full bg-success animate-pulse" />
              <span className="text-muted-foreground">
                Buscamos empresas para probar CobroInteligente en su proceso de cobranza
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
              Detecta qué clientes pagarán tarde antes de que ocurra
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Deja de perseguir pagos atrasados.
              Analiza tu historial de facturación y detecta qué clientes tienen mayor riesgo de atraso, para priorizar tu cobranza.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group" onClick={scrollToForm}>
                  Quiero probarlo gratis
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-2 bg-muted px-3 py-2 rounded-md inline-block">
              🚀 No necesitas integración. Solo comparte algunas facturas y te mostramos el resultado.
            </p>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-2xl font-bold">Detecta</div>
                <div className="text-sm text-muted-foreground">
                  Clientes con mayor riesgo de atraso
                </div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <div className="text-2xl font-bold">Prioriza</div>
                <div className="text-sm text-muted-foreground">
                  Tu cobranza de forma inteligente
                </div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <div className="text-2xl font-bold">Mejora</div>
                <div className="text-sm text-muted-foreground">
                  Tu flujo de caja
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="relative rounded-lg bg-card border border-border p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-3 rounded-full bg-destructive/60" />
                <div className="size-3 rounded-full bg-warning/60" />
                <div className="size-3 rounded-full bg-success/60" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-md bg-high-risk/10 border border-high-risk/20">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-high-risk/20 flex items-center justify-center text-sm font-medium text-high-risk">
                      AC
                    </div>
                    <div>
                      <div className="font-medium">Empresa A</div>
                      <div className="text-sm text-muted-foreground">
                        $24,500 vence 15 Marzo
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-high-risk">
                      Alto Riesgo
                    </div>
                    <div className="text-xs text-muted-foreground">
                      87% probabilidad de atraso
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 rounded-md bg-warning/10 border border-warning/20">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-warning/20 flex items-center justify-center text-sm font-medium text-warning-foreground">
                      TI
                    </div>
                    <div>
                      <div className="font-medium">Empresa B</div>
                      <div className="text-sm text-muted-foreground">
                        $12,300 vence 18 marzo
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-warning-foreground">
                      Riesgo Medio
                    </div>
                    <div className="text-xs text-muted-foreground">
                      45% probabilidad de atraso
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 rounded-md bg-success/10 border border-success/20">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-success/20 flex items-center justify-center text-sm font-medium text-success">
                      GS
                    </div>
                    <div>
                      <div className="font-medium">Empresa C</div>
                      <div className="text-sm text-muted-foreground">
                        $8,750 vence 20 marzo
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-success">
                      Bajo Riesgo
                    </div>
                    <div className="text-xs text-muted-foreground">
                      8% probabilidad de atraso
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
