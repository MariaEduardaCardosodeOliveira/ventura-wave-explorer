import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Plus, Calculator } from "lucide-react";

interface PaymentOptionsProps {
  basePrice: number;
  onPaymentChange: (payment: any) => void;
}

export const PaymentOptions = ({ basePrice, onPaymentChange }: PaymentOptionsProps) => {
  const [selectedPayment, setSelectedPayment] = useState("avista");
  const [customDiscount, setCustomDiscount] = useState(0);
  const [downPayment, setDownPayment] = useState(7497);
  const [tradeinValue, setTradeinValue] = useState(0);

  const paymentOptions = [
    {
      id: "avista",
      name: "À Vista",
      installments: 1,
      rate: 0,
      description: "Pagamento único com desconto"
    },
    {
      id: "6x",
      name: "6x + T.M.: 1,58%",
      installments: 6,
      rate: 1.58,
      description: "6 parcelas com taxa de 1,58%"
    },
    {
      id: "12x",
      name: "12x + T.M.: 1,58%",
      installments: 12,
      rate: 1.58,
      description: "12 parcelas com taxa de 1,58%"
    },
    {
      id: "18x",
      name: "18x + T.M.: 1,59%",
      installments: 18,
      rate: 1.59,
      description: "18 parcelas com taxa de 1,59%"
    },
    {
      id: "24x",
      name: "24x + T.M.: 1,58%",
      installments: 24,
      rate: 1.58,
      description: "24 parcelas com taxa de 1,58%"
    },
    {
      id: "36x",
      name: "36x + T.M.: 1,59%",
      installments: 36,
      rate: 1.59,
      description: "36 parcelas com taxa de 1,59%"
    },
    {
      id: "48x",
      name: "48x + T.M.: 1,58%",
      installments: 48,
      rate: 1.58,
      description: "48 parcelas com taxa de 1,58%"
    },
    {
      id: "60x",
      name: "60x + T.M.: 1,59%",
      installments: 60,
      rate: 1.59,
      description: "60 parcelas com taxa de 1,59%"
    }
  ];

  const calculatePayment = (option: any) => {
    const discountedPrice = basePrice - customDiscount - tradeinValue;
    
    if (option.id === "avista") {
      return {
        total: discountedPrice,
        installmentValue: discountedPrice,
        installments: 1
      };
    }

    const financeAmount = discountedPrice - downPayment;
    const monthlyRate = option.rate / 100;
    const installmentValue = financeAmount * (monthlyRate * Math.pow(1 + monthlyRate, option.installments)) / 
                            (Math.pow(1 + monthlyRate, option.installments) - 1);

    return {
      total: downPayment + (installmentValue * option.installments),
      installmentValue,
      installments: option.installments,
      downPayment,
      financeAmount
    };
  };

  const selectedOption = paymentOptions.find(opt => opt.id === selectedPayment);
  const paymentCalc = selectedOption ? calculatePayment(selectedOption) : null;

  const handlePaymentSelect = (value: string) => {
    setSelectedPayment(value);
    const option = paymentOptions.find(opt => opt.id === value);
    if (option) {
      const calc = calculatePayment(option);
      onPaymentChange({
        option: value,
        calculation: calc,
        customDiscount,
        tradeinValue
      });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Payment Options */}
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Formas de Pagamento</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedPayment} onValueChange={handlePaymentSelect}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {paymentOptions.map((option) => (
                  <div key={option.id} className="flex items-start space-x-2">
                    <RadioGroupItem 
                      value={option.id} 
                      id={option.id}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <Label 
                        htmlFor={option.id}
                        className="text-base font-medium cursor-pointer"
                      >
                        {option.name}
                      </Label>
                      <p className="text-sm text-muted-foreground mt-1">
                        {option.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Additional Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Desconto Manual</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="discount">Valor do Desconto (R$)</Label>
                <Input
                  id="discount"
                  type="number"
                  value={customDiscount}
                  onChange={(e) => setCustomDiscount(Number(e.target.value))}
                  placeholder="0,00"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Permuta</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="tradein">Valor da Permuta (R$)</Label>
                <Input
                  id="tradein"
                  type="number"
                  value={tradeinValue}
                  onChange={(e) => setTradeinValue(Number(e.target.value))}
                  placeholder="0,00"
                />
                <p className="text-xs text-muted-foreground">
                  Valor a ser descontado do preço final
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Down Payment Adjustment for Financing */}
        {selectedPayment !== "avista" && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Entrada</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="downpayment">Valor da Entrada (R$)</Label>
                <Input
                  id="downpayment"
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  placeholder="7497,00"
                />
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Payment Summary */}
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              Resumo do Pagamento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Preço Base:</span>
                <span>R$ {basePrice.toLocaleString('pt-BR')}</span>
              </div>
              
              {customDiscount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Desconto:</span>
                  <span>- R$ {customDiscount.toLocaleString('pt-BR')}</span>
                </div>
              )}
              
              {tradeinValue > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Permuta:</span>
                  <span>- R$ {tradeinValue.toLocaleString('pt-BR')}</span>
                </div>
              )}

              <hr />

              {paymentCalc && (
                <>
                  {selectedPayment !== "avista" && (
                    <>
                      <div className="flex justify-between">
                        <span>Entrada:</span>
                        <span>R$ {paymentCalc.downPayment?.toLocaleString('pt-BR')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>{paymentCalc.installments}x de:</span>
                        <span className="font-bold">
                          R$ {paymentCalc.installmentValue.toLocaleString('pt-BR')}
                        </span>
                      </div>
                    </>
                  )}
                  
                  <div className="flex justify-between text-lg font-bold text-primary pt-2 border-t">
                    <span>Total Final:</span>
                    <span>R$ {paymentCalc.total.toLocaleString('pt-BR')}</span>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-2">
          <Button variant="outline" className="w-full">
            <Plus className="w-4 h-4 mr-2" />
            Adicionar Parcela
          </Button>
          <Button variant="outline" className="w-full">
            <Plus className="w-4 h-4 mr-2" />
            Adicionar Permuta
          </Button>
        </div>
      </div>
    </div>
  );
};