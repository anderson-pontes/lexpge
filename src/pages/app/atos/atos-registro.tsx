import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Helmet } from "react-helmet-async";
import { DatePicker } from "../Date/date";
import Editor from '../editor/Editor';


export function NovoRegistro () {
  return (
    <>
    <div className="flex flex-col gap-4">      
      <Helmet title="Novo Registro"/>
      <h1 className="text-3xl font-bold tracking-tight text-justify">Novo registro</h1>
    
        <form className="grid grid-cols-4 gap-3">
          <div className="space-y-2">
            <Label>Número:</Label>
            <Input placeholder="Número" className="h-8"/>
          </div>
          <div className="col-span-3 space-y-2">
            <Label>Título:</Label>
            <Input placeholder="Título" className="h-8"/>
          </div>
          <div className="col-span-4 space-y-2">
            <Label>Ementa:</Label>
            <Textarea placeholder="Ementa" className="h-8"/>
          </div>
          <div className="space-y-2">
            <Label>Tipo:</Label>          
            <Select defaultValue="default">
              <SelectTrigger className="h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
              <SelectItem value="default">Escolha uma opção</SelectItem>
                <SelectItem value="constituicaoEstadual">Constituição Estadual</SelectItem>
                <SelectItem value="decretoLegislativo">Decreto Legislativo</SelectItem>
                <SelectItem value="decretoLei">Decreto Lei</SelectItem>
                <SelectItem value="decretoNumerado">Decreto Numerado</SelectItem>
                <SelectItem value="decretoNaoNumerado">Decreto Não Numerado</SelectItem>
                <SelectItem value="emendaConsitucional">Emenda Constitucional</SelectItem>
                <SelectItem value="instrucaoNormativa">Instrução Normativa</SelectItem>
                <SelectItem value="leiComplementar">Lei Complementar</SelectItem>
                <SelectItem value="leiOrdinaria">Lei Ordinária</SelectItem>
                <SelectItem value="mensagemDoGovernador">Mensagem do Governador</SelectItem>
                <SelectItem value="portaria">Portaria</SelectItem>
                <SelectItem value="portariaConjunta">Portaria Conjunta</SelectItem>
                <SelectItem value="resolucao">Resolução</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Situação:</Label>          
            <Select defaultValue="default">
              <SelectTrigger className="h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
              <SelectItem value="default">Escolha uma opção</SelectItem>
                <SelectItem value="constituicaoEstadual">Declarado(a) Inconstitucional</SelectItem>
                <SelectItem value="decretoLegislativo">Eficácia Suspensa</SelectItem>
                <SelectItem value="decretoLei">Vigente</SelectItem>
                <SelectItem value="decretoNumerado">Revogado(a)</SelectItem>
                <SelectItem value="decretoNaoNumerado">Revogado(a) Parcialmente</SelectItem>
                <SelectItem value="emendaConsitucional">Sem Efeito</SelectItem>
                <SelectItem value="instrucaoNormativa">Sem Revogação Expressa</SelectItem>
                <SelectItem value="leiComplementar">Vetado(a)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="col-span-2 space-y-2">
            <Label>Fonte:</Label>
            <Input placeholder="Fonte" className="h-8"/>
          </div>

          <div className="space-y-2">
            <Label>Data do ato:</Label>
            <DatePicker />
          </div>

          <div className="space-y-2">
            <Label>Data de publicação:</Label>
            <DatePicker/>
          </div>

          <div className="col-span-2 space-y-2">
            <Label>Descritores:</Label>
            <Input placeholder="Descritores" className="h-8"/>
          </div>

          <div className="col-span-4 space-y-2">
            <Label>Observação:</Label>
            <Textarea placeholder="Observação" className="h-8"/>
          </div>

          <div className="col-span-4">
            <Editor/>
          </div>

          

         

             
          

        
    
      </form>
    
    </div>

    
    </>
    
    
  )
}
