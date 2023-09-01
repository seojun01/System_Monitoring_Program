"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVarinfoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_varinfo_dto_1 = require("./create-varinfo.dto");
class UpdateVarinfoDto extends (0, mapped_types_1.PartialType)(create_varinfo_dto_1.CreateVarinfoDto) {
}
exports.UpdateVarinfoDto = UpdateVarinfoDto;
//# sourceMappingURL=update-varinfo.dto.js.map