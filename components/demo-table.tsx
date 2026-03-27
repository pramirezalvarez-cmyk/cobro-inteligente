"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, TrendingDown, TrendingUp, Minus } from "lucide-react"

const demoData = [
  {
    client: "Empresa A",
    initials: "EA",
    invoice: "FAC-001",
    amount: "$34.200.000",
    dueDate: "02 Abr 2026",
    riskScore: 92,
    riskLevel: "high",
    trend: "up",
    paymentHistory: "4 de 8 con atraso",
    avgDaysLate: 18,
  },
  {
    client: "Empresa B",
    initials: "EB",
    invoice: "FAC-002",
    amount: "$18.750.000",
    dueDate: "05 Abr 2026",
    riskScore: 78,
    riskLevel: "high",
    trend: "up",
    paymentHistory: "3 de 6 con atraso",
    avgDaysLate: 12,
  },
  {
    client: "Empresa C",
    initials: "EC",
    invoice: "FAC-003",
    amount: "$56.300.000",
    dueDate: "08 Abr 2026",
    riskScore: 45,
    riskLevel: "medium",
    trend: "stable",
    paymentHistory: "2 de 10 con atraso",
    avgDaysLate: 5,
  },
  {
    client: "Empresa D",
    initials: "ED",
    invoice: "FAC-004",
    amount: "$22.100.000",
    dueDate: "10 Abr 2026",
    riskScore: 38,
    riskLevel: "medium",
    trend: "down",
    paymentHistory: "1 de 5 con atraso",
    avgDaysLate: 3,
  },
  {
    client: "Empresa E",
    initials: "EE",
    invoice: "FAC-005",
    amount: "$67.500.000",
    dueDate: "12 Abr 2026",
    riskScore: 12,
    riskLevel: "low",
    trend: "stable",
    paymentHistory: "0 de 12 con atraso",
    avgDaysLate: 0,
  },
  {
    client: "Empresa F",
    initials: "EF",
    invoice: "FAC-006",
    amount: "$41.800.000",
    dueDate: "15 Abr 2026",
    riskScore: 8,
    riskLevel: "low",
    trend: "down",
    paymentHistory: "0 de 8 con atraso",
    avgDaysLate: 0,
  },
]

function getRiskBadgeStyles(level: string) {
  switch (level) {
    case "high":
      return "bg-high-risk/10 text-high-risk border-high-risk/20 hover:bg-high-risk/10"
    case "medium":
      return "bg-warning/10 text-warning-foreground border-warning/20 hover:bg-warning/10"
    case "low":
      return "bg-success/10 text-success border-success/20 hover:bg-success/10"
    default:
      return ""
  }
}

function TrendIcon({ trend }: { trend: string }) {
  switch (trend) {
    case "up":
      return <TrendingUp className="size-4 text-high-risk" />
    case "down":
      return <TrendingDown className="size-4 text-success" />
    default:
      return <Minus className="size-4 text-muted-foreground" />
  }
}

export function DemoTable() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-balance">
            Detecta riesgos de pago antes de que se conviertan en problemas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Analiza tu historial de facturación y datos de tus clientes para identificar pagos que podrían retrasarse.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card overflow-hidden shadow-sm">
          <div className="flex items-center justify-between p-4 border-b border-border bg-muted/30">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium">Facturas próximas</span>
              <Badge variant="secondary" className="text-xs">
                Live Demo
              </Badge>
            </div>
            <button className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors">
              Ver todo
              <ArrowUpRight className="size-3" />
            </button>
          </div>

          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[200px]">Cliente</TableHead>
                <TableHead>N° Factura</TableHead>
                <TableHead className="text-right">Monto</TableHead>
                <TableHead>Vencimiento</TableHead>
                <TableHead className="text-center">Puntaje de riesgo</TableHead>
                <TableHead className="text-center">Tendencia</TableHead>
                <TableHead>Historial de pagos</TableHead>
                <TableHead className="text-right">Promedio días de atraso</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {demoData.map((row) => (
                <TableRow key={row.invoice}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div
                        className={`size-8 rounded-full flex items-center justify-center text-xs font-medium ${
                          row.riskLevel === "high"
                            ? "bg-high-risk/10 text-high-risk"
                            : row.riskLevel === "medium"
                            ? "bg-warning/10 text-warning-foreground"
                            : "bg-success/10 text-success"
                        }`}
                      >
                        {row.initials}
                      </div>
                      <span className="font-medium">{row.client}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground font-mono text-sm">
                    {row.invoice}
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {row.amount}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {row.dueDate}
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge
                      variant="outline"
                      className={getRiskBadgeStyles(row.riskLevel)}
                    >
                      {row.riskScore}%
                    </Badge>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex justify-center">
                      <TrendIcon trend={row.trend} />
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {row.paymentHistory}
                  </TableCell>
                  <TableCell className="text-right">
                    {row.avgDaysLate > 0 ? (
                      <span
                        className={
                          row.avgDaysLate > 10
                            ? "text-high-risk"
                            : row.avgDaysLate > 5
                            ? "text-warning-foreground"
                            : "text-muted-foreground"
                        }
                      >
                        {row.avgDaysLate} Dias
                      </span>
                    ) : (
                      <span className="text-success">Sin atraso</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="size-10 rounded-full bg-high-risk/10 flex items-center justify-center">
                <TrendingUp className="size-5 text-high-risk" />
              </div>
              <div className="text-2xl font-bold">$52.950.000</div>
            </div>
            <p className="text-sm text-muted-foreground">
              Facturas de alto riesgo que requieren atención inmediata
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="size-10 rounded-full bg-warning/10 flex items-center justify-center">
                <Minus className="size-5 text-warning-foreground" />
              </div>
              <div className="text-2xl font-bold">$78.400.000</div>
            </div>
            <p className="text-sm text-muted-foreground">
              Facturas de riesgo medio que se deben monitorear de cerca
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="size-10 rounded-full bg-success/10 flex items-center justify-center">
                <TrendingDown className="size-5 text-success" />
              </div>
              <div className="text-2xl font-bold">$109.300.000</div>
            </div>
            <p className="text-sm text-muted-foreground">
              Facturas de bajo riesgo que se esperan pagar a tiempo
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
