import axiosClient from "../utils/axios";

const orderAPI = {
  getOrderStatus: (status: string) => {
    const url = `/orders?status=${status}`;
    return axiosClient.get(url);
  },
  getOrdersAll: () => {
    const url = `/orders`;
    return axiosClient.get(url);
  },
  getOrderDetail: (id: string) => {
    const url = `/orders/${id}`;
    return axiosClient.get(url);
  },
  getOrderWaiting: () => {
    const url = `/orders/?status=WAITING`;
    return axiosClient.get(url);
  },
  createOrder: (data: any) => {
    const url = `/orders`;
    return axiosClient.post(url, data);
  },
  updateOrder: (id: string, body: { status: string }) => {
    const url = `/orders/${id}`;
    return axiosClient.patch(url, body);
  },
};

export default orderAPI;