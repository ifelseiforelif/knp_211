interface IOrder {
    id: string;
    customerName: string;
    state: string;
    address: string;
    zipCode: string;
    orderDate: string;
    isShipped: boolean;
}

export default IOrder;