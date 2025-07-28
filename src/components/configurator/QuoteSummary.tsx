import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Download, 
  Send, 
  Mail, 
  MessageCircle, 
  Ship, 
  Palette, 
  Settings, 
  CreditCard,
  User,
  CheckCircle
} from "lucide-react";

interface QuoteSummaryProps {
  configData: {
    model: string;
    category: string;
    customization: {
      color: string;
      accessories: string[];
    };
    payment: any;
    personalInfo: any;
  };
  basePrice: number;
}

export const QuoteSummary = ({ configData, basePrice }: QuoteSummaryProps) => {
  const accessories = [
    { id: "guincho", name: "Guincho Elétrico", price: 2500 },
    { id: "retrovisor", name: "Retrovisor", price: 450 },
    { id: "parabrisa", name: "Parabrisa", price: 1200 },
    { id: "toldo", name: "Toldo", price: 800 },
    { id: "som", name: "Sistema de Som", price: 1500 }
  ];

  const colors = [
    { id: "branco", name: "Branco", special: false },
    { id: "azul", name: "Azul Marinho", special: true },
    { id: "vermelho", name: "Vermelho", special: true },
    { id: "preto", name: "Preto", special: false },
    { id: "verde", name: "Verde", special: true }
  ];

  const selectedColor = colors.find(c => c.id === configData.customization.color);
  const selectedAccessories = accessories.filter(acc => 
    configData.customization.accessories.includes(acc.id)
  );
  
  const accessoriesTotal = selectedAccessories.reduce((total, acc) => total + acc.price, 0);
  const totalPrice = basePrice + accessoriesTotal;

  const handleGeneratePDF = () => {
    // Implementar geração de PDF
    console.log("Gerando PDF...", configData);
  };

  const handleSendWhatsApp = () => {
    const message = `🚤 *Orçamento Ventura Marine*

*Modelo:* ${configData.model}
*Cor:* ${selectedColor?.name}
*Acessórios:* ${selectedAccessories.map(acc => acc.name).join(", ") || "Nenhum"}

*Valor Total:* R$ ${totalPrice.toLocaleString("pt-BR")}

*Cliente:* ${configData.personalInfo?.nomeCompleto}
*Telefone:* ${configData.personalInfo?.telefone}

Gostaria de mais informações sobre este orçamento!`;

    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleSendEmail = () => {
    const subject = `Orçamento Ventura Marine - ${configData.model}`;
    const body = `Olá! Gostaria de receber o orçamento detalhado para:

Modelo: ${configData.model}
Cor: ${selectedColor?.name}
Valor Total: R$ ${totalPrice.toLocaleString("pt-BR")}

Aguardo retorno!

${configData.personalInfo?.nomeCompleto}
${configData.personalInfo?.telefone}`;

    const mailtoUrl = `mailto:vendas@venturamarine.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <CheckCircle className="w-8 h-8 text-green-500" />
          <h2 className="text-3xl font-bold text-primary">
            Orçamento Finalizado
          </h2>
        </div>
        <p className="text-muted-foreground">
          Sua configuração está pronta! Revise os detalhes e envie seu orçamento.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Product Summary */}
        <div className="lg:col-span-2 space-y-6">
          {/* Model Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Ship className="w-5 h-5" />
                Modelo Selecionado
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="w-24 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <Ship className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{configData.model}</h3>
                  <p className="text-muted-foreground capitalize">{configData.category}</p>
                  <Badge variant="outline" className="mt-1">
                    Preço Base: R$ {basePrice.toLocaleString("pt-BR")}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Customization */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Personalização
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Cor Selecionada</h4>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full border-2 border-border bg-primary"></div>
                  <span>{selectedColor?.name}</span>
                  {selectedColor?.special && (
                    <Badge variant="secondary" className="text-xs">Especial</Badge>
                  )}
                </div>
              </div>

              {selectedAccessories.length > 0 && (
                <div>
                  <h4 className="font-medium mb-2">Acessórios Selecionados</h4>
                  <div className="space-y-2">
                    {selectedAccessories.map((accessory) => (
                      <div key={accessory.id} className="flex justify-between items-center">
                        <span className="text-sm">{accessory.name}</span>
                        <span className="text-sm font-medium">
                          + R$ {accessory.price.toLocaleString("pt-BR")}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Payment */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Forma de Pagamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              {configData.payment?.calculation && (
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Modalidade:</span>
                    <span className="font-medium">{configData.payment.option}</span>
                  </div>
                  
                  {configData.payment.option !== "avista" && (
                    <>
                      <div className="flex justify-between">
                        <span>Entrada:</span>
                        <span>R$ {configData.payment.calculation.downPayment?.toLocaleString("pt-BR")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Parcelas:</span>
                        <span>
                          {configData.payment.calculation.installments}x de R${" "}
                          {configData.payment.calculation.installmentValue?.toLocaleString("pt-BR")}
                        </span>
                      </div>
                    </>
                  )}
                  
                  {configData.payment.customDiscount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Desconto:</span>
                      <span>- R$ {configData.payment.customDiscount.toLocaleString("pt-BR")}</span>
                    </div>
                  )}
                  
                  {configData.payment.tradeinValue > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Permuta:</span>
                      <span>- R$ {configData.payment.tradeinValue.toLocaleString("pt-BR")}</span>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Customer Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Dados do Cliente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>Nome:</strong> {configData.personalInfo?.nomeCompleto}</p>
                  <p><strong>E-mail:</strong> {configData.personalInfo?.email}</p>
                  <p><strong>Telefone:</strong> {configData.personalInfo?.telefone}</p>
                </div>
                <div>
                  <p><strong>CPF:</strong> {configData.personalInfo?.cpf}</p>
                  <p><strong>Cidade:</strong> {configData.personalInfo?.cidade}/{configData.personalInfo?.estado}</p>
                  <p><strong>CEP:</strong> {configData.personalInfo?.cep}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Price Summary & Actions */}
        <div className="space-y-6">
          {/* Price Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle>Resumo Financeiro</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span>Preço Base:</span>
                <span>R$ {basePrice.toLocaleString("pt-BR")}</span>
              </div>
              
              {accessoriesTotal > 0 && (
                <div className="flex justify-between">
                  <span>Acessórios:</span>
                  <span>R$ {accessoriesTotal.toLocaleString("pt-BR")}</span>
                </div>
              )}
              
              <Separator />
              
              <div className="flex justify-between text-lg font-bold text-primary">
                <span>Total:</span>
                <span>R$ {totalPrice.toLocaleString("pt-BR")}</span>
              </div>

              {configData.payment?.calculation && (
                <>
                  <Separator />
                  <div className="text-sm text-muted-foreground">
                    <p className="font-medium mb-1">Valor Final com Pagamento:</p>
                    <p>R$ {configData.payment.calculation.total?.toLocaleString("pt-BR")}</p>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <Card>
            <CardHeader>
              <CardTitle>Enviar Orçamento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                onClick={handleGeneratePDF}
                className="w-full flex items-center gap-2"
                size="lg"
              >
                <Download className="w-4 h-4" />
                Gerar PDF
              </Button>
              
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  variant="outline" 
                  onClick={handleSendWhatsApp}
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={handleSendEmail}
                  className="flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  E-mail
                </Button>
              </div>
              
              <div className="text-xs text-muted-foreground text-center mt-4">
                Orçamento válido por 30 dias
              </div>
            </CardContent>
          </Card>

          {/* Quote ID */}
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">ID do Orçamento</p>
                <p className="font-mono text-lg font-bold">
                  #VM{Date.now().toString().slice(-6)}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};