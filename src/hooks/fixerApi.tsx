import { useEffect, useState, SetStateAction, Dispatch } from "react";
import axios from "axios";
import { FIXER_API_KEY, FIXER_API_URL } from "react-native-dotenv";

const BASE_CURRENCY = "EUR";

export interface IFixerError {
  type: string;
  info: string;
}

export interface IFixerRates {
  [currency: string]: number;
}

export interface IFixerResponse {
  base: string;
  date: string;
  rates: IFixerRates;
  timestamp: number;
  error?: IFixerError;
}

export interface IFixerSymbols {
  [symbol: string]: string;
}

export interface IFixerSymbolResponse {
  symbols: IFixerSymbols;
  error?: IFixerError;
}

export function useFixerSymbolList() {
  const { data, isLoading, isError } = useFixerApi<IFixerSymbolResponse>(
    `${FIXER_API_URL}/symbols?access_key=${FIXER_API_KEY}`
  );

  return {data, isLoading, isError}
}

export function useFixerRatesList() {
  const { data, isLoading, isError } = useFixerApi<IFixerResponse>(
    `${FIXER_API_URL}/latest?access_key=${FIXER_API_KEY}`
  );

  return { data, isLoading, isError };
}

function useFixerApi<T extends IFixerResponse | IFixerSymbolResponse>(url: string): 
  {
    data: T;
    isLoading: boolean;
    isError: boolean;
  }
{
  const [data, setData] = useState<T>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios.request<T>({ url });

        setData(result.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, isError }
}
