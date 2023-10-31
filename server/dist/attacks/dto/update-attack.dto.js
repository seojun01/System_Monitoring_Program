"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAttackDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_attack_dto_1 = require("./create-attack.dto");
class UpdateAttackDto extends (0, mapped_types_1.PartialType)(create_attack_dto_1.CreateAttackDto) {
}
exports.UpdateAttackDto = UpdateAttackDto;
//# sourceMappingURL=update-attack.dto.js.map