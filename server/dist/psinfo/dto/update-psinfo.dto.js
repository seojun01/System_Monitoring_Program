"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePsinfoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_psinfo_dto_1 = require("./create-psinfo.dto");
class UpdatePsinfoDto extends (0, mapped_types_1.PartialType)(create_psinfo_dto_1.CreatePsinfoDto) {
}
exports.UpdatePsinfoDto = UpdatePsinfoDto;
//# sourceMappingURL=update-psinfo.dto.js.map