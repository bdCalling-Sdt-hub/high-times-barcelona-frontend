// import ClubDetailsImage from '@/assets/images/club-details/club-details.png';
import Image from 'next/image';
// import Gallery from '@/assets/images/club-details/gallery.png';
// import Play from '@/assets/images/club-details/play.png';
import CustomMap from './CustomMap';
import ClubRatingDetails from './ClubRatingDetails';
import MembershipRequirements from './MembershipRequirements';
import MembershipForm from './MembershipForm';
import { TClub } from '@/redux/features/club/clubApi';
import { getImageUrl } from '@/utils/getImageUrl';
const CannabisClubDetails = ({ club }: { club: TClub }) => {
      return (
            <div className="container">
                  <div className="my-10">
                        <div className="grid grid-cols-12 gap-8">
                              <div className="col-span-12 md:col-span-7 relative">
                                    <Image
                                          height={434}
                                          width={1000}
                                          src={getImageUrl(club?.image)}
                                          alt="Cannabis Club Details"
                                          className="w-full h-[434px] object-cover rounded-xl"
                                    />
                                    {/* <div className="flex justify-end gap-4 absolute bottom-5 right-10 transform ">
                                          <div className="cursor-pointer">
                                                <Image
                                                      src={Play}
                                                      alt="Cannabis Club Details"
                                                      className="size-[45px] object-cover rounded-xl"
                                                />
                                          </div>
                                          <div className="cursor-pointer">
                                                <Image
                                                      src={Gallery}
                                                      alt="Cannabis Club Details"
                                                      className="w-[113px] h-[42px] object-cover rounded-xl"
                                                />
                                          </div>
                                    </div> */}
                              </div>
                              <div className="col-span-12 md:col-span-5 space-y-6">
                                    <ClubRatingDetails club={club} />
                                    <CustomMap club={club} />
                              </div>
                        </div>

                        <div className="grid grid-cols-12 gap-8">
                              <div className="col-span-12 md:col-span-7">
                                    <MembershipRequirements club={club} />
                              </div>
                              <div className="col-span-12 md:col-span-5  mt-4">
                                    <MembershipForm clubId={club?._id} />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default CannabisClubDetails;
