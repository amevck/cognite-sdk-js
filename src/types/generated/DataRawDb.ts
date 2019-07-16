/*!
 * Copyright 2019 Cognite AS
 */

export interface DataRawDB {
  items?: DataRawDbItem[];
}

/**
 * A NoSQL database to store customer data.
 */
export interface DataRawDbItem {
  /**
   * Unique name of a database.
   */
  name: string;
}
