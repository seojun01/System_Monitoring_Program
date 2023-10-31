"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateIportDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_iport_dto_1 = require("./create-iport.dto");
class UpdateIportDto extends (0, mapped_types_1.PartialType)(create_iport_dto_1.CreateIportDto) {
}
exports.UpdateIportDto = UpdateIportDto;
//# sourceMappingURL=update-iport.dto.js.map