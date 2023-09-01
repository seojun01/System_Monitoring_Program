"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFixedinfoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_fixedinfo_dto_1 = require("./create-fixedinfo.dto");
class UpdateFixedinfoDto extends (0, mapped_types_1.PartialType)(create_fixedinfo_dto_1.CreateFixedinfoDto) {
}
exports.UpdateFixedinfoDto = UpdateFixedinfoDto;
//# sourceMappingURL=update-fixedinfo.dto.js.map