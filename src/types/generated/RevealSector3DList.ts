/*!
 * Copyright 2019 Cognite AS
 */

export interface RevealSector3DList {
  items: RevealSector3DListItem[];
}

export interface RevealSector3DListItem {
  /**
   * The bounding box of the subtree with this sector as the root sector. Is null if there are
   * no geometries in the subtree.
   */
  boundingBox: RevealSector3DListBoundingBox;
  /**
   * The depth of the sector in the sector tree, starting from 0 at the root sector.
   */
  depth: number;
  /**
   * The id of the sector.
   */
  id: number;
  /**
   * The parent of the sector, null if it is the root sector.
   */
  parentId: number;
  /**
   * String representing the path to the sector: 0/2/6/ etc.
   */
  path: string;
  /**
   * The file ID of the data file for this sector, with multiple versions supported. Use
   * /3d/files/{id} to retrieve the file.
   */
  threedFiles: RevealSector3DListThreedFile[];
}

/**
 * The bounding box of the subtree with this sector as the root sector. Is null if there are
 * no geometries in the subtree.
 */
export interface RevealSector3DListBoundingBox {
  max: number[];
  min: number[];
}

/**
 * The file ID of the data file for this resource, with multiple versions supported. Use
 * /3d/files/{id} to retrieve the file.
 */
export interface RevealSector3DListThreedFile {
  /**
   * File ID. Use /3d/files/{id} to retrieve the file.
   */
  fileId: number;
  /**
   * Version of the file format.
   */
  version: number;
}