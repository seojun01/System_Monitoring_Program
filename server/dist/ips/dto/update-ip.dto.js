"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateIpDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_ip_dto_1 = require("./create-ip.dto");
class UpdateIpDto extends (0, mapped_types_1.PartialType)(create_ip_dto_1.CreateIpDto) {
}
exports.UpdateIpDto = UpdateIpDto;
//# sourceMappingURL=update-ip.dto.js.map