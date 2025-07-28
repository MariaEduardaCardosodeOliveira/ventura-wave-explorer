import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ConfiguratorLayout } from "@/components/configurator/ConfiguratorLayout";
import { ProductCustomization } from "@/components/configurator/ProductCustomization";
import { PaymentOptions } from "@/components/configurator/PaymentOptions";

interface ConfigurationData {
  model: string;
  category: string;
  customization: {
    color: string;
    accessories: string[];
  };
  payment: any;
  personalInfo: any;
}

const ProductConfigurator = () => {
  const { category, model } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [configData, setConfigData] = useState<ConfigurationData>({
    model: model?.replace(/-/g, ' ') || '',
    category: category || '',
    customization: {
      color: 'branco',
      accessories: []
    },
    payment: null,
    personalInfo: null
  });

  const totalSteps = 5;
  const basePrice = 85000; // Preço base exemplo

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return true; // Modelo já selecionado
      case 2:
        return configData.customization.color !== '';
      case 3:
        return configData.payment !== null;
      case 4:
        return configData.personalInfo !== null;
      case 5:
        return true;
      default:
        return false;
    }
  };

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Finalizar configuração
      console.log('Configuração finalizada:', configData);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate('/monte-o-seu');
    }
  };

  const handleCustomizationChange = (customization: any) => {
    setConfigData(prev => ({
      ...prev,
      customization
    }));
  };

  const handlePaymentChange = (payment: any) => {
    setConfigData(prev => ({
      ...prev,
      payment
    }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="text-center py-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              {configData.model}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Modelo selecionado com sucesso! Vamos começar a personalização.
            </p>
            <div className="max-w-md mx-auto bg-accent/10 p-6 rounded-lg">
              <p className="font-medium">Categoria: {configData.category}</p>
              <p className="font-medium">Modelo: {configData.model}</p>
            </div>
          </div>
        );
      
      case 2:
        return (
          <ProductCustomization
            model={configData.model}
            category={configData.category}
            onConfigurationChange={handleCustomizationChange}
          />
        );
      
      case 3:
        return (
          <PaymentOptions
            basePrice={basePrice}
            onPaymentChange={handlePaymentChange}
          />
        );
      
      case 4:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Informações Pessoais
            </h2>
            <p className="text-muted-foreground">
              Em desenvolvimento...
            </p>
          </div>
        );
      
      case 5:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-primary mb-4">
              Orçamento Final
            </h2>
            <p className="text-muted-foreground">
              Em desenvolvimento...
            </p>
          </div>
        );
      
      default:
        return null;
    }
  };

  if (!category || !model) {
    navigate('/monte-o-seu');
    return null;
  }

  return (
    <ConfiguratorLayout
      currentStep={currentStep}
      totalSteps={totalSteps}
      onNextStep={handleNextStep}
      onPrevStep={handlePrevStep}
      canProceed={canProceed()}
    >
      {renderStepContent()}
    </ConfiguratorLayout>
  );
};

export default ProductConfigurator;