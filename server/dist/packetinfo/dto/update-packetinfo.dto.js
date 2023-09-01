"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePacketinfoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_packetinfo_dto_1 = require("./create-packetinfo.dto");
class UpdatePacketinfoDto extends (0, mapped_types_1.PartialType)(create_packetinfo_dto_1.CreatePacketinfoDto) {
}
exports.UpdatePacketinfoDto = UpdatePacketinfoDto;
//# sourceMappingURL=update-packetinfo.dto.js.map