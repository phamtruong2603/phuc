export const converDate = (startTimeISO: string | any) => {

    const startTimeDate: Date = new Date(startTimeISO);

    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const startTimeFormatted: string = startTimeDate.toLocaleDateString('vi-VN', options);

    return startTimeFormatted
}

export const converTime = (startTimeISO: string | any) => {

    // Chuyển đổi từ ISO 8601 sang đối tượng Date
    const startTimeDate: Date = new Date(startTimeISO);

    // Lấy giờ và phút từ đối tượng Date
    const hours: number = startTimeDate.getHours();
    const minutes: number = startTimeDate.getMinutes();

    // Định dạng giờ và phút
    const startTimeFormatted: string = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

    // In ra kết quả
    return startTimeFormatted
}

export function converThumnails(arr: any[]): { [key: string]: any } {
    const result: { [key: string]: any } = {};

    arr.forEach((value, index) => {
        result[`thumnails[${index}]`] = value.originFileObj;
    });

    return result;
}