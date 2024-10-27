export interface Budget {
  id?: string;                
  client: string;             
  date: Date;                  
  modules: Module[];        
}

export enum Zone {
  LIVING = 'Living',         
  DINING = 'Comedor',         
  KITCHEN = 'Cocina',         
  BEDROOM = 'Dormitorio'       
}

export interface ModuleType {
  id: number;                 
  name: string;              
  slots: number;              
  price: number;              
}

export interface Module {
  moduleTypeId: number;       
  zone: Zone;                 
}
