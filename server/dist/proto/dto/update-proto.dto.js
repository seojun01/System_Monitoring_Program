"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProtoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_proto_dto_1 = require("./create-proto.dto");
class UpdateProtoDto extends (0, mapped_types_1.PartialType)(create_proto_dto_1.CreateProtoDto) {
}
exports.UpdateProtoDto = UpdateProtoDto;
//# sourceMappingURL=update-proto.dto.js.map