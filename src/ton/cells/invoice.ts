import { beginCell } from "ton-core";
import { InvoiceOpCodes } from "../wrappers/Invoice";

export const invoiceCodeCellBase64 =
  "te6cckECGQEAApAAART/APSkE/S88sgLAQIBYhMCAgEgDAMCASAJBAIBIAYFADG0mZ2omh9IH0gfSBqammf6QDpAJgIG6+DwAgEgCAcAMbNqO1E0PpA+kD6QNTU0z/SAdIBMBBnXweAAMbKnO1E0PpA+kD6QNTU0z/SAdIBMBBHXweACASALCgAptdtdqJofSB9IH0gamppn+kA6QCYQAC22fz2omh9IH0gfSBqammf6QDpAJgvg8AIBIBINAgEgDw4ALbSTPaiaH0gfSB9IGpqaZ/pAOkAmDY4wAgEgERAAL7KBu1E0PpA+kD6QNTU0z/SAdIBMBdfB4AAxs9L7UTQ+kD6QPpA1NTTP9IB0gEwEFdfB4AAxuQQe1E0PpA+kD6QNTU0z/SAdIBMBAnXweAICzhUUADNMhQCM8WUAbPFlAEzxYSzMzLP8oBygHJ7VSALzQzIscAjhxsEtDTAzH6QDBwgBDIywVYzxZY+gLLasmDBvsA4NDTAwFxsJJfA+D6QDAC0x/TPzEhghD1OgLTuuMCMiCCEEjFBPO6jiww7UTQ+kD6QPpA1NTTP9IB0gEwbCIyUWPHBbOVgQ8A8vDeBNTU0z8wVRXwAuAxgXFgBmghAcwLEeuo4k7UTQ+kD6QPpA1NTTP9IB0gEwMFF1xwWzlYEPAPLw3lUFcPAC4DCED/LwAfZb7UTQ+kD6QPpA1NTTP9IB0gEwAX+wloIA8ALy8N5TcbmWggDwA/Lw3iPQUpDHBbOWggDwBPLw3iGAZKkEp2NwgBDIywUnzxZTQqH6AstqyXH7AHCAEMjLBSjPFlj6AstqyVOCvJFwkoMG4vsAU3G8kjc34w1VFH8B8AIYADBwgBDIywVQCs8WUYKhGPoCGMtqyYMG+wDbNpuK";

export function buildPayInvoiceCell() {
  return beginCell()
    .storeUint(InvoiceOpCodes.PAY_INVOICE, 32)
    .storeUint(0, 64)
    .endCell();
}
