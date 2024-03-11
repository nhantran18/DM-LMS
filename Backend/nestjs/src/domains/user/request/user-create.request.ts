import { AccountType, BackgroundKnowledgeType, GenderType, Prisma, QualificationType } from '@prisma/client';
import { IsArray, IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { timeEponch } from 'src/shared/date.helper';

export class UserCreateREQ {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEnum(GenderType)
  gender: GenderType;

  @IsString()
  birth: string;

  @IsNotEmpty()
  @IsString()
  language: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  refeshToken: string;

  @IsEnum(AccountType)
  accountType: AccountType;

  @IsOptional()
  @IsBoolean()
  priorTest: boolean = false;

  @IsOptional()
  @IsArray()
  learningStyleQA: string[] = null;

  @IsOptional()
  @IsEnum(BackgroundKnowledgeType)
  backgroundKnowledge: BackgroundKnowledgeType = BackgroundKnowledgeType.BASIC;

  @IsOptional()
  @IsEnum(QualificationType)
  qualification: QualificationType = QualificationType.HIGH_SCHOOL;

  static toCreateInput(body: UserCreateREQ): Prisma.AuthenticatedUserCreateInput {
    if (body.learningStyleQA) body.priorTest = true;
    return {
      email: body.email,
      name: body.name,
      birth: timeEponch(body.birth),
      gender: body.gender ? body.gender : GenderType.UNKNOWN,
      language: body.language,
      lastLogin: Date.now(),
      lastLogout: Date.now(),
      password: body.password,
      username: body.username,
      refeshToken: body.refeshToken,
      accountType: body.accountType,
    };
  }
}
