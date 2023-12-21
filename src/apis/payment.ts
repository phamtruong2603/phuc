import { callApi } from "./callAPI"

// payment-service/api/v1/payment/create-payment
// public class OrderRequestDTO {
//     private Long amount;
//     private String orderInfor;
// }
// getmapping
export const createPayment = async(
    data: {
        amount: number
        orderInfor?: string
    }
) => {
    return await callApi<any>(`payment-service/api/v1/payment/create-payment`, "get", data)
}