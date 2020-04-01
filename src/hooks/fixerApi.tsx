import { useEffect, useState, SetStateAction, Dispatch } from "react";
import axios from "axios";
import { FIXER_API_KEY, FIXER_API_URL } from "react-native-dotenv";

const BASE_CURRENCY = 'EUR';

interface ServerResponse {
  data: IFixerRates | IFixerResponse | IFixerSymbolResponse
}

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

export function useFixerApi():  [{ 
  data: ServerResponse, 
  isLoading: boolean, 
  isError: boolean }, 
  Dispatch<SetStateAction<string>>
] {
  const [data, setData] = useState<ServerResponse>();
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState(
    `${FIXER_API_URL}/symbols?access_key=${FIXER_API_KEY}`
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios.request<ServerResponse>({
          url: `${FIXER_API_URL}/latest?access_key=${FIXER_API_KEY}`
        });
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchData();
  }, [url]);

  return [{ data, isLoading, isError }, setUrl];
}
