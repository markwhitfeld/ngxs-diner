export class LoadTables {
  static readonly type = '[Ordering] Load Tables';
  constructor() {}
}

export class OpenTable {
  static readonly type = '[Ordering] Open Table';
  constructor(public readonly tableName: string) {}
}

export class CloseTable {
  static readonly type = '[Ordering] Close Table';
  constructor(public readonly tableName: string) {}
}

export class EditTableOrder {
  static readonly type = '[Ordering] Edit Table Order';
  constructor(public readonly tableName: string) {}
}

export class SetTablePersonCount {
  static readonly type = '[Ordering] Set Table Person Count';
  constructor(public readonly tableName: string, public readonly count: number) {}
}

export class AddTableChoice {
  static readonly type = '[Ordering] Add Table Choice';
  constructor(public readonly tableName: string, public readonly choice: string) {}
}

export class RemoveTableChoice {
  static readonly type = '[Ordering] Remove Table Choice';
  constructor(public readonly tableName: string, public readonly choice: string) {}
}
