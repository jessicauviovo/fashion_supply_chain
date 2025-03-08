export const idlFactory = ({ IDL }) => {
  const PackagingAndShipping = IDL.Record({
    'sustainable_packaging' : IDL.Bool,
    'carbon_emissions_in_shipping' : IDL.Float64,
    'packaging_materials' : IDL.Text,
  });
  const EnvironmentalImpact = IDL.Record({
    'sustainable_materials' : IDL.Bool,
    'water_usage' : IDL.Text,
    'recyclability' : IDL.Bool,
    'carbon_footprint' : IDL.Float64,
    'pollution' : IDL.Text,
    'waste_management' : IDL.Text,
  });
  const LegalCompliance = IDL.Record({
    'environmental_regulations_compliance' : IDL.Bool,
    'labor_laws_compliance' : IDL.Bool,
  });
  const ProductLifecycle = IDL.Record({
    'end_of_life_recyclability' : IDL.Bool,
    'durability' : IDL.Bool,
    'repairability' : IDL.Bool,
  });
  const CSRPractices = IDL.Record({
    'ethical_marketing' : IDL.Bool,
    'transparency' : IDL.Bool,
    'community_support' : IDL.Bool,
  });
  const SupplierRelationships = IDL.Record({
    'long_term_partnerships' : IDL.Bool,
    'fair_pricing' : IDL.Bool,
    'supplier_audits' : IDL.Bool,
  });
  const AnimalWelfare = IDL.Record({
    'cruelty_free' : IDL.Bool,
    'animal_sourcing' : IDL.Text,
    'fur_and_exotic_skinned' : IDL.Bool,
  });
  const LaborRights = IDL.Record({
    'working_conditions' : IDL.Text,
    'child_labor' : IDL.Bool,
    'fair_wages' : IDL.Bool,
    'unionization_allowed' : IDL.Bool,
    'forced_labor' : IDL.Bool,
    'working_hours' : IDL.Text,
  });
  const CulturalImpact = IDL.Record({
    'cultural_appropriation' : IDL.Bool,
    'fair_representation' : IDL.Bool,
  });
  const SupplyChainRecord = IDL.Record({
    'packaging_and_shipping' : PackagingAndShipping,
    'product_id' : IDL.Text,
    'company_name' : IDL.Text,
    'environmental_impact' : EnvironmentalImpact,
    'legal_compliance' : LegalCompliance,
    'product_lifecycle' : ProductLifecycle,
    'csr_practices' : CSRPractices,
    'product_name' : IDL.Text,
    'fair_trade_certified' : IDL.Bool,
    'supplier_relationships' : SupplierRelationships,
    'animal_welfare' : AnimalWelfare,
    'labor_rights' : LaborRights,
    'cultural_impact' : CulturalImpact,
  });
  return IDL.Service({
    'AddRecord' : IDL.Func([SupplyChainRecord], [IDL.Text], []),
    'GetRecordByCompanyAndProductId' : IDL.Func(
        [IDL.Text, IDL.Text],
        [IDL.Opt(SupplyChainRecord)],
        [],
      ),
    'GetRecords' : IDL.Func([], [IDL.Vec(SupplyChainRecord)], []),
    'SendEthicalScore' : IDL.Func(
        [IDL.Text, IDL.Text],
        [IDL.Float64],
        ['query'],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
