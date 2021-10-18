import { CACHE_MANAGER, Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Cache } from "cache-manager";
import * as otpGenerator from 'otp-generator';

@Injectable()
export class OtpService {

  private readonly OTP_LENGTH;

  constructor(
    @Inject(CACHE_MANAGER)
    private cacheManager: Cache,
    private config: ConfigService
  ) {
    this.OTP_LENGTH = this.config.get('otp.length');
  }

  async generateOtp(sessionId: string) {
    const otp = otpGenerator.generate(this.OTP_LENGTH, {
      digits: true,
      alphabets: false,
      specialChars: false,
      upperCase: false,
    });
    await this.cacheManager.set(otp, sessionId);
    return otp;
  }

  async checkOtp(otp: string, sessionId: string) {
    const savedSessionId = await this.cacheManager.get(otp);
    const result = !!savedSessionId && savedSessionId === sessionId;
    if (result) {
      await this.cacheManager.del(otp);
    }
    return result;
  }
}