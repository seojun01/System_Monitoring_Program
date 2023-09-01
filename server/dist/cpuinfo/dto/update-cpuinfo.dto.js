"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCpuinfoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_cpuinfo_dto_1 = require("./create-cpuinfo.dto");
class UpdateCpuinfoDto extends (0, mapped_types_1.PartialType)(create_cpuinfo_dto_1.CreateCpuinfoDto) {
}
exports.UpdateCpuinfoDto = UpdateCpuinfoDto;
//# sourceMappingURL=update-cpuinfo.dto.js.map