import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface ConfiguratorLayoutProps {
  currentStep: number;
  totalSteps: number;
  onNextStep: () => void;
  onPrevStep: () => void;
  canProceed: boolean;
  children: React.ReactNode;
}

const stepNames = [
  "Escolher Modelo",
  "Montagem do Produto", 
  "Formas de Pagamento",
  "Informações Pessoais",
  "Geração do Orçamento"
];

export const ConfiguratorLayout = ({
  currentStep,
  totalSteps,
  onNextStep,
  onPrevStep,
  canProceed,
  children
}: ConfiguratorLayoutProps) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-secondary/5 to-accent/10">
      <div className="container mx-auto px-4 py-8">
        {/* Progress Header */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              Monte o Seu
            </h1>
            <p className="text-muted-foreground">
              Etapa {currentStep} de {totalSteps}: {stepNames[currentStep - 1]}
            </p>
          </div>
          
          {/* Progress Bar */}
          <div className="mb-6">
            <Progress value={progress} className="h-3" />
          </div>

          {/* Step Indicators */}
          <div className="flex justify-between items-center text-sm">
            {stepNames.map((name, index) => (
              <div
                key={index}
                className={`flex flex-col items-center ${
                  index + 1 <= currentStep
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                    index + 1 <= currentStep
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {index + 1}
                </div>
                <span className="hidden md:block text-center max-w-20">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          {children}
        </div>

        {/* Navigation */}
        <div className="max-w-4xl mx-auto mt-8 flex justify-between">
          <Button
            variant="outline"
            onClick={onPrevStep}
            disabled={currentStep === 1}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Button>
          
          <Button
            onClick={onNextStep}
            disabled={!canProceed}
            className="flex items-center gap-2"
          >
            {currentStep === totalSteps ? "Finalizar" : "Próxima"}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};