/*!
 * Copyright 2019 Cognite AS
 */

export interface Revision3D {
  /**
   * The number of asset mappings for this revision.
   */
  assetMappingCount: number;
  /**
   * Initial camera position and target.
   */
  camera?: Revision3DCamera;
  /**
   * The creation time of the resource, in milliseconds since January 1, 1970 at 00:00 UTC.
   */
  createdTime: Date;
  /**
   * The file id.
   */
  fileId: number;
  /**
   * The ID of the revision.
   */
  id: number;
  /**
   * Custom, application specific metadata. String key -> String value. Limits: Maximum length
   * of key is 32 bytes, value 512 bytes, up to 16 key-value pairs.
   */
  metadata?: { [key: string]: string };
  /**
   * True if the revision is marked as published.
   */
  published: boolean;
  rotation?: number[];
  /**
   * The status of the revision.
   */
  status: Revision3DStatus;
  /**
   * The threed file ID of a thumbnail for the revision. Use /3d/files/{id} to retrieve the
   * file.
   */
  thumbnailThreedFileId?: number;
  /**
   * The URL of a thumbnail for the revision.
   */
  thumbnailURL?: string;
}

/**
 * Initial camera position and target.
 */
export interface Revision3DCamera {
  /**
   * Initial camera position.
   */
  position?: number[];
  /**
   * Initial camera target.
   */
  target?: number[];
}

/**
 * The status of the revision.
 */
export enum Revision3DStatus {
  Done = 'Done',
  Failed = 'Failed',
  Processing = 'Processing',
  Queued = 'Queued',
}