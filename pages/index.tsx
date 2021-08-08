import { FormEvent, useState, useEffect, useCallback } from "react";
import InfiniteScroll from 'react-infinite-scroller';

import { productsService } from "../services";
import { IFilterParams, IProduct } from "../utils/types";
import { Button, Card, Header, Input, Select } from "../components";
import * as S from "./styles";

const Home = () => {
  const defaultFilters: IFilterParams = {
    category: "",
    orderBy: "",
    page: 1,
    pageSize: 30,
    strain: "",
    strainType: "",
  };

  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({ ...defaultFilters });
  const [products, setProducts] = useState([]);

  const changeFilterHandler = (updatedField: any) => {
    const newFilter = { ...filters, ...updatedField };
    setFilters(newFilter);
  };

  const clearFilterHandler = () => {
    setFilters({ ...defaultFilters });
    getProducts({ ...defaultFilters });
  };

  const filterSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getProducts(filters);
  };

  const getProducts = useCallback(
    async (filters) => {
      setLoading(true);
      const { data } = await productsService.listByFilter(filters);
      setProducts(data);
      setLoading(false);
    },
    []
  );

  useEffect(() => {
    getProducts(filters);
  }, [getProducts, filters]);

  return (
    <>
      <S.Container>
        <Header />
        <S.FilterForm onSubmit={filterSubmitHandler}>
          <Input
            onChange={(e: { target: HTMLInputElement }) =>
              changeFilterHandler({ strain: e.target.value })
            }
            placeholder="Filter by Strain"
            value={filters.strain || ""}
          />
          <Select
            onChange={(e: { target: HTMLSelectElement }) => {
              changeFilterHandler({ strainType: e.target.value });
            }}
            value={filters.strainType || ""}
          >
            <option value="">Select one type</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Indica">Indica</option>
            <option value="Mixed">Mixed</option>
            <option value="Sativa">Sativa</option>
          </Select>
          <Select
            onChange={(e: { target: HTMLSelectElement }) => {
              changeFilterHandler({ category: e.target.value });
            }}
            value={filters.category || ""}
          >
            <option value="">Select one category</option>
            <option value="vape">Vape</option>
            <option value="flower">Flower</option>
          </Select>
          <Select
            onChange={(e: { target: HTMLSelectElement }) => {
              changeFilterHandler({ orderBy: e.target.value });
            }}
            value={filters.orderBy || ""}
          >
            <option value="">Order by</option>
            <option value="strain">Strain</option>
            <option value="strain_type">Type</option>
            <option value="category">Category</option>
          </Select>
          <Button type="submit" isPrimary>
            Search
          </Button>
          <Button type="button" onClick={clearFilterHandler}>
            Clear
          </Button>
        </S.FilterForm>
        <S.LoadingWrapper active={loading} spinner>
          <S.Content>
            {products.map((item: IProduct) => (
              <Card
                key={item.id}
                id={item.id}
                strain={item.strain}
                strainType={item.strain_type}
                brand={item.brand}
                weightGrams={item.weight_grams}
                placeholderImage={item.placeholder_img}
                category={item.category}
              />
            ))}
            {products.length === 0 && (
              <S.NoResults>No results found</S.NoResults>
            )}
          </S.Content>
        </S.LoadingWrapper>
      </S.Container>
    </>
  );
};

export default Home;
