import _ from "lodash";
export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}
//first time item converted to lodash wrapper then converted to startindex bla bla
