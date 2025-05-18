const intl = new Intl.NumberFormat("en-KE",{
    style: "currency",
    currency: "KES"
});

export const priceConverter = (price) => intl.format(price*100);

export default function useCurrency(price){
    return intl.format(price);
}