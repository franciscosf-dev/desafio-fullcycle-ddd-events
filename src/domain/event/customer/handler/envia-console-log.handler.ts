import EventHandlerInterface from "../../../event/@shared/event-handler.interface";
import CustomerChangeAddressEvent from "../customer-change-address.event";

export default class EnviaConsoleLogHandler
  implements EventHandlerInterface<CustomerChangeAddressEvent>
{
  handle(event: CustomerChangeAddressEvent): void {
    console.log(`Endereço do cliente: ${event.eventData.ID}, ${event.eventData.nome}, alterado para: ${event.eventData.endereco}`); 
  }
}
