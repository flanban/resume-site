class StaticPagesController < ApplicationController
  def index
  end

  def resume
  end

  def resume_pdf
    send_file(
        "#{Rails.root}/public/johnfullerresume.pdf",
        filename: "JohnFullerResume.pdf",
        type: "application/pdf"
      )
  end

  def work
  end
end
