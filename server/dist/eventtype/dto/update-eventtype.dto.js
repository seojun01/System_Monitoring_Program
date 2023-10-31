"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEventtypeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_eventtype_dto_1 = require("./create-eventtype.dto");
class UpdateEventtypeDto extends (0, mapped_types_1.PartialType)(create_eventtype_dto_1.CreateEventtypeDto) {
}
exports.UpdateEventtypeDto = UpdateEventtypeDto;
//# sourceMappingURL=update-eventtype.dto.js.map