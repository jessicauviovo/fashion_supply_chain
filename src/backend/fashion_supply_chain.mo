import Text "mo:base/Text";
import Array "mo:base/Array";
import Float "mo:base/Float";  

actor SupplyChainRecords {

  type SupplyChainRecord = {
      company_name: Text;                
      product_name: Text;                
      product_id: Text;                  
      labor_rights: LaborRights;         
      environmental_impact: EnvironmentalImpact; 
      animal_welfare: AnimalWelfare;     
      cultural_impact: CulturalImpact;   
      packaging_and_shipping: PackagingAndShipping; 
      product_lifecycle: ProductLifecycle; 
      fair_trade_certified: Bool;        
      csr_practices: CSRPractices;       
      supplier_relationships: SupplierRelationships; 
      legal_compliance: LegalCompliance; 
  };

  // Sub-record for labor rights and fair wages
  type LaborRights = {
      fair_wages: Bool;                 // Are workers paid fair wages?
      working_conditions: Text;         // Description of worker conditions
      child_labor: Bool;                // Whether child labor is used
      forced_labor: Bool;               // Whether forced labor is used
      unionization_allowed: Bool;       // Whether unionization is allowed
      working_hours: Text;              // Description of working hours
  };

  // Sub-record for environmental impact
  type EnvironmentalImpact = {
      sustainable_materials: Bool;      // Whether raw materials are sustainably sourced
      water_usage: Text;                // Water usage in the production process
      carbon_footprint: Float;          // Carbon footprint of production and transportation
      waste_management: Text;           // Waste management practices during production
      pollution: Text;                  // Pollution (chemicals, dyes, etc.) used or managed
      recyclability: Bool;              // Whether the product is recyclable
  };

  // Sub-record for animal welfare
  type AnimalWelfare = {
      cruelty_free: Bool;               // Whether animals are treated ethically
      animal_sourcing: Text;            // How animals are sourced (e.g., ethical farming)
      fur_and_exotic_skinned: Bool;     // Whether fur or exotic skins are used
  };

  // Sub-record for cultural impact
  type CulturalImpact = {
      cultural_appropriation: Bool;     // Whether the company engages in cultural appropriation
      fair_representation: Bool;        // Whether the company fairly represents cultures
  };

  // Sub-record for packaging and shipping practices
  type PackagingAndShipping = {
      sustainable_packaging: Bool;      // Whether packaging is sustainable or recyclable
      carbon_emissions_in_shipping: Float; // Carbon emissions of transportation
      packaging_materials: Text;        // Type of materials used in packaging
  };

  // Sub-record for product lifecycle
  type ProductLifecycle = {
      durability: Bool;                 // Whether the product is designed to last
      repairability: Bool;              // Whether the product can be repaired
      end_of_life_recyclability: Bool;  // Whether the product can be recycled at end of life
  };

  // Sub-record for corporate social responsibility practices
  type CSRPractices = {
      transparency: Bool;               // Whether the company is transparent about its operations
      community_support: Bool;          // Whether the company supports local communities
      ethical_marketing: Bool;          // Whether marketing is done ethically
  };

  // Sub-record for supplier relationships
  type SupplierRelationships = {
      long_term_partnerships: Bool;     // Whether the company maintains long-term supplier relationships
      fair_pricing: Bool;               // Whether suppliers are paid fairly for their products
      supplier_audits: Bool;            // Whether independent audits are performed on suppliers
  };

  // Sub-record for legal compliance
  type LegalCompliance = {
      labor_laws_compliance: Bool;      // Whether the company complies with local labor laws
      environmental_regulations_compliance: Bool; // Whether the company complies with environmental regulations
  };

  // This is the storage for the fashion supply chain records
  stable var records : [SupplyChainRecord] = [];

  // Function to add a new record to the list
  public func AddRecord(newRecord: SupplyChainRecord) : async Text {
      records := Array.append(records, [newRecord]);
      return "Record added successfully";
  };

  // Function to retrieve all the records
  public func GetRecords() : async [SupplyChainRecord] {
      return records;
  };

  // Function to find record with matching company name and product ID 
  public func GetRecordByCompanyAndProductId(companyName: Text, productId: Text) : async ?SupplyChainRecord {
      switch (Array.find<SupplyChainRecord>(records, func(record) {
          if (Text.toLowercase(record.company_name) == Text.toLowercase(companyName)) {
              return Text.toLowercase(record.product_id) == Text.toLowercase(productId);
          };
          return false;
      })) {
          case (?record) { return ?record };
          case null { return null };
      };
  };

  //Function that will be called by Chrome extension to locate the record with companyName and productId, 
  //compute the ethical score and send result back to the Chrome extension
  public query func SendEthicalScore(companyName: Text, productId: Text) : async Float {
    
    //find record
    switch (Array.find<SupplyChainRecord>(records, func(record) {
      if (Text.toLowercase(record.company_name) == Text.toLowercase(companyName)) {
          return Text.toLowercase(record.product_id) == Text.toLowercase(productId);
      };
      return false;
  })) {
      case (?record) { 
        
        //calculate ethical score
        var score: Float = 0.0;

        // Labor Rights Scoring
        if (record.labor_rights.fair_wages) { score += 3.0; };
        if (record.labor_rights.child_labor == false) { score += 2.0; };
        if (record.labor_rights.forced_labor == false) { score += 2.0; };
        if (record.labor_rights.unionization_allowed) { score += 2.0; };
        if (record.labor_rights.working_conditions == "Safe working conditions") { score += 2.0; };
        if (record.labor_rights.working_hours == "40 hours per week") { score += 2.0; };

        // Environmental Impact Scoring
        if (record.environmental_impact.sustainable_materials) { score += 3.0; };
        if (record.environmental_impact.carbon_footprint < 0.2) { score += 3.0; };
        if (record.environmental_impact.recyclability) { score += 2.0; };
        if (record.environmental_impact.pollution == "Minimal") { score += 2.0; };

        // Animal Welfare Scoring
        if (record.animal_welfare.cruelty_free) { score += 3.0; };
        if (record.animal_welfare.fur_and_exotic_skinned == false) { score += 2.0; };

        // Cultural Impact Scoring
        if (record.cultural_impact.fair_representation) { score += 3.0; };
        if (record.cultural_impact.cultural_appropriation == false) { score += 3.0; };

        // Packaging and Shipping Scoring
        if (record.packaging_and_shipping.sustainable_packaging) { score += 3.0; };
        if (record.packaging_and_shipping.carbon_emissions_in_shipping < 0.1) { score += 2.0; };

        // Product Lifecycle Scoring
        if (record.product_lifecycle.durability) { score += 3.0; };
        if (record.product_lifecycle.repairability) { score += 2.0; };
        if (record.product_lifecycle.end_of_life_recyclability) { score += 2.0; };

        // CSR Practices Scoring
        if (record.csr_practices.transparency) { score += 2.0; };
        if (record.csr_practices.community_support) { score += 2.0; };
        if (record.csr_practices.ethical_marketing) { score += 2.0; };

        // Supplier Relationships Scoring
        if (record.supplier_relationships.long_term_partnerships) { score += 3.0; };
        if (record.supplier_relationships.fair_pricing) { score += 3.0; };
        if (record.supplier_relationships.supplier_audits) { score += 2.0; };

        // Legal Compliance Scoring
        if (record.legal_compliance.labor_laws_compliance) { score += 3.0; };
        if (record.legal_compliance.environmental_regulations_compliance) { score += 3.0; };

        // Fair Trade Certification Scoring
        if (record.fair_trade_certified) { score += 5.0; };

        // Normalize score to 100 
        let max_score: Float = 71.0;  
        let percentage: Float = (score / max_score) * 100.0;
        return Float.nearest(percentage);
      };

      case null { return -1 };
    };
    return -1; 
  };
}