"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNotiDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_noti_dto_1 = require("./create-noti.dto");
class UpdateNotiDto extends (0, mapped_types_1.PartialType)(create_noti_dto_1.CreateNotiDto) {
}
exports.UpdateNotiDto = UpdateNotiDto;
//# sourceMappingURL=update-noti.dto.js.map