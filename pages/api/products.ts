import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";
var fsp = fs.promises;

import { IProduct } from "../../utils/types";
import { paginate } from "../../utils/helpers";
import { dynamicSort } from "../../utils/helpers/dynamicSort";

const getProducts = async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const category = req.query.category;
    const orderBy = req.query.orderBy;
    const page = Number(req.query.page);
    const strain = req.query.strain;
    const strainType = req.query.strainType;
    const pageSize = Number(req.query.pageSize);
    
    const fileData = await fsp.readFile(
      path.join(process.cwd(), "data/products.json")
    );
    let products = JSON.parse(fileData);

    if(strain) {
      products = products.filter((el: IProduct) => el.strain == strain);
    }

    if(strainType) {
      products = products.filter((el: IProduct) => el.strain_type == strainType);
    }

    if(category) {
      products = products.filter((el: IProduct) => el.category == category);
    }

    if(orderBy) {
      products = products.sort(dynamicSort(orderBy))
    }

    products = paginate(products, pageSize, page)
    
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error reading data" });
  }
};

export default getProducts;
