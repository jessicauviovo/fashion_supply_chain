import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface AnimalWelfare {
  'cruelty_free' : boolean,
  'animal_sourcing' : string,
  'fur_and_exotic_skinned' : boolean,
}
export interface CSRPractices {
  'ethical_marketing' : boolean,
  'transparency' : boolean,
  'community_support' : boolean,
}
export interface CulturalImpact {
  'cultural_appropriation' : boolean,
  'fair_representation' : boolean,
}
export interface EnvironmentalImpact {
  'sustainable_materials' : boolean,
  'water_usage' : string,
  'recyclability' : boolean,
  'carbon_footprint' : number,
  'pollution' : string,
  'waste_management' : string,
}
export interface LaborRights {
  'working_conditions' : string,
  'child_labor' : boolean,
  'fair_wages' : boolean,
  'unionization_allowed' : boolean,
  'forced_labor' : boolean,
  'working_hours' : string,
}
export interface LegalCompliance {
  'environmental_regulations_compliance' : boolean,
  'labor_laws_compliance' : boolean,
}
export interface PackagingAndShipping {
  'sustainable_packaging' : boolean,
  'carbon_emissions_in_shipping' : number,
  'packaging_materials' : string,
}
export interface ProductLifecycle {
  'end_of_life_recyclability' : boolean,
  'durability' : boolean,
  'repairability' : boolean,
}
export interface SupplierRelationships {
  'long_term_partnerships' : boolean,
  'fair_pricing' : boolean,
  'supplier_audits' : boolean,
}
export interface SupplyChainRecord {
  'packaging_and_shipping' : PackagingAndShipping,
  'product_id' : string,
  'company_name' : string,
  'environmental_impact' : EnvironmentalImpact,
  'legal_compliance' : LegalCompliance,
  'product_lifecycle' : ProductLifecycle,
  'csr_practices' : CSRPractices,
  'product_name' : string,
  'fair_trade_certified' : boolean,
  'supplier_relationships' : SupplierRelationships,
  'animal_welfare' : AnimalWelfare,
  'labor_rights' : LaborRights,
  'cultural_impact' : CulturalImpact,
}
export interface _SERVICE {
  'AddRecord' : ActorMethod<[SupplyChainRecord], string>,
  'GetRecordByCompanyAndProductId' : ActorMethod<
    [string, string],
    [] | [SupplyChainRecord]
  >,
  'GetRecords' : ActorMethod<[], Array<SupplyChainRecord>>,
  'SendEthicalScore' : ActorMethod<[string, string], number>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
